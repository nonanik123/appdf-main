import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getMarkDownData = (folder) => {
  try {
    const folderPath = path.join(process.cwd(), folder); // Mutlak yol oluşturma
    const files = fs.readdirSync(folderPath);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    const postsData = markdownPosts.map((file) => {
      const filePath = path.join(folderPath, file);
      const fullContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fullContent);
      const slug = file.replace('.md', '');

      return {
        slug,
        data,
        content,
      };
    });

    return postsData;
  } catch (error) {
    console.error(`Error reading markdown data from folder ${folder}:`, error);
    return [];
  }
};

export default getMarkDownData;