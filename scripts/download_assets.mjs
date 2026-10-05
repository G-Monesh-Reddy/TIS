import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesToDownload = [
  { name: 'tis-logo.png', url: 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png' },
  { name: 'tis-footer-logo.png', url: 'https://tis.edu.in/_next/static/media/footer-logo.230b79ff.png' },
  { name: 'campus-residential.jpg', url: 'https://tis.edu.in/_next/static/media/BestResidential.5173db8d.jpg' },
  { name: 'campus-uttarakhand.jpg', url: 'https://tis.edu.in/_next/static/media/UTTARAKHAND.652376d5.jpg' },
  { name: 'sports-horse-riding.png', url: 'https://tis.edu.in/_next/static/media/horseRiding.8f259127.png' },
  { name: 'sports-swimming.png', url: 'https://tis.edu.in/_next/static/media/swimming.d4285534.png' },
  { name: 'sports-archery.png', url: 'https://tis.edu.in/_next/static/media/archery.7a805345.png' },
  { name: 'sports-football.png', url: 'https://tis.edu.in/_next/static/media/football.ca61e5d0.png' },
  { name: 'sports-squash.png', url: 'https://tis.edu.in/_next/static/media/squash.ffa0360a.png' },
  { name: 'sports-shooting.png', url: 'https://tis.edu.in/_next/static/media/shooting.b0b11d74.png' },
  { name: 'sports-cycling.png', url: 'https://tis.edu.in/_next/static/media/cycling.80dbb9b1.png' },
  { name: 'sports-hockey.png', url: 'https://tis.edu.in/_next/static/media/hockey.219fe552.png' },
  { name: 'sports-volleyball.png', url: 'https://tis.edu.in/_next/static/media/volleyball.045be884.png' },
  { name: 'sports-billiards.png', url: 'https://tis.edu.in/_next/static/media/billiards-single.a1e831c6.png' },
  { name: 'sports-taekwondo.png', url: 'https://tis.edu.in/_next/static/media/taekwando.86e26406.png' },
  { name: 'activity-dance.webp', url: 'https://tis.edu.in/_next/static/media/dance.88843edb.webp' },
  { name: 'activity-pottery.webp', url: 'https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp' },
  { name: 'activity-polo.webp', url: 'https://tis.edu.in/_next/static/media/polo.973ddbae.webp' },
  { name: 'activity-karate.webp', url: 'https://tis.edu.in/_next/static/media/karate.4020fba5.webp' },
  { name: 'parent-tashi.png', url: 'https://tis.edu.in/_next/static/media/tashi.3807cb3c.png' },
  { name: 'parent-namita.png', url: 'https://tis.edu.in/_next/static/media/namita.86a0f799.png' },
  { name: 'parent-sandeep.png', url: 'https://tis.edu.in/_next/static/media/sandeep.1b22b59e.png' },
  { name: 'parent-pinky.png', url: 'https://tis.edu.in/_next/static/media/pinky.8d7145b0.png' },
  { name: 'parent-suresh.png', url: 'https://tis.edu.in/_next/static/media/suresh.80d60e49.png' },
  { name: 'parent-urja.png', url: 'https://tis.edu.in/_next/static/media/urja.03e3c3f3.png' },
  { name: 'award-iayp.jpg', url: 'https://tis.edu.in/_next/static/media/International_Award_for_Young_People_logo.a0d1c4fa.jpg' }
];

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(item) {
  return new Promise((resolve) => {
    const filePath = path.join(targetDir, item.name);
    const file = fs.createWriteStream(filePath);
    https.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${item.name}`);
          resolve(true);
        });
      } else {
        console.warn(`Failed (${res.statusCode}): ${item.name}`);
        file.close();
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error: ${item.name}`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${imagesToDownload.length} assets...`);
  for (const item of imagesToDownload) {
    await download(item);
  }
  console.log('All downloads completed!');
}

run();
