
import { promises as fs } from 'fs'; 
import Main from '@/components/main';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/listings.json', 'utf8')
  const listings = JSON.parse(file);
  
  return (
    <main className="container mx-auto">
      <div className="pt-8">
        <Main listings={listings} />
      </div>
    </main>
  );
}
