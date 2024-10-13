import { MongoClient, ObjectId } from "mongodb";

// MongoDB bağlantı URL'si
const uri =
  "mongodb+srv://dialogfusion:denemepass1.@cluster0.r0bba.mongodb.net/aplio";

// MongoDB istemcisi
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    await client.connect();
    const database = client.db("aplio");
    const blogs = database.collection("blogs");

    const blogData = await req.json();
    const result = await blogs.insertOne(blogData);

    return new Response(
      JSON.stringify({ message: "Blog başarıyla oluşturuldu", result }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Blog oluşturulurken bir hata oluştu", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    await client.connect();
    const database = client.db("aplio");
    const blogs = database.collection("blogs");

    const blogList = await blogs.find({}).toArray();

    return new Response(JSON.stringify(blogList), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Bloglar getirilirken bir hata oluştu",
        error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.close();
  }
}

export async function GET_BY_ID(req) {
  try {
    await client.connect();
    const database = client.db("aplio");
    const blogs = database.collection("blogs");

    const { id } = req.params;
    const blog = await blogs.findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return new Response(JSON.stringify({ message: "Blog bulunamadı" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Blog getirilirken bir hata oluştu", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.close();
  }
}

export async function PUT(req) {
  try {
    await client.connect();
    const database = client.db("aplio");
    const blogs = database.collection("blogs");

    const { id } = req.params;
    const blogData = await req.json();
    const result = await blogs.updateOne(
      { _id: new ObjectId(id) },
      { $set: blogData }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "Blog bulunamadı" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Blog başarıyla güncellendi", result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Blog güncellenirken bir hata oluştu", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.close();
  }
}

export async function DELETE(req) {
  try {
    await client.connect();
    const database = client.db("aplio");
    const blogs = database.collection("blogs");

    // URL'den id parametresini manuel olarak ayrıştırın
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    // ObjectId'nin geçerli olup olmadığını kontrol edin
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Geçersiz blog ID'si" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await blogs.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "Blog bulunamadı" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Blog başarıyla silindi", result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Blog silinirken bir hata oluştu:", error); // Hata mesajını konsola yazdırın
    return new Response(
      JSON.stringify({ message: "Blog silinirken bir hata oluştu", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await client.close();
  }
}
