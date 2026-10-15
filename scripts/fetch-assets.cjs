const fs = require('fs');

const path = require('path');

const https = require('https');

const sitePath = path.join(__dirname, '..', 'src', 'data', 'site.ts');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'site');

const src = fs.readFileSync(sitePath, 'utf8');

const urls = [...new Set(src.match(/https:\/\/images\.pexels\.com\/[^'"\s]+/g))];

function download(url, dest) {

  return new Promise((resolve, reject) => {

    const doGet = (u, redirects = 0) => {

      https.get(u, (res) => {

        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {

          res.resume();

          if (redirects > 5) return reject(new Error('too many redirects'));

          return doGet(res.headers.location, redirects + 1);

        }

        if (res.statusCode !== 200) {

          res.resume();

          return reject(new Error(`HTTP ${res.statusCode} for ${u}`));

        }

        const file = fs.createWriteStream(dest);

        res.pipe(file);

        file.on('finish', () => file.close(resolve));

        file.on('error', reject);

      }).on('error', reject);

    };

    doGet(url);

  });

}

(async () => {

  fs.mkdirSync(outDir, { recursive: true });

  let out = src;

  for (let i = 0; i < urls.length; i++) {

    const name = `img-${String(i + 1).padStart(2, '0')}.jpg`;

    const dest = path.join(outDir, name);

    await download(urls[i], dest);

    out = out.split(urls[i]).join(`/assets/site/${name}`);

    console.log(`✓ ${name}  <- ${urls[i].slice(0, 70)}...`);

  }

  fs.writeFileSync(sitePath, out);

  console.log(`\n${urls.length} görsel indirildi, site.ts güncellendi.`);

})().catch((e) => {

  console.error(e);

  process.exit(1);

});
