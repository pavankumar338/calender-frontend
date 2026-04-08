import https from 'https';
import fs from 'fs';

const ids = [
  '1462275646964-a0e3386b89fa', '1490750967868-88aa4486c946', '1443397646383-16272048780e',
  '1413867623588-da567a1b41ac', '1423483641154-715697241f32', '1506744626753-1fa28f67c9bf',
  '1431794062232-2a99a5aaddd5', '1472214103451-9374bd1c798e', '1465146144678-0a115be320cb',
  '1470071394143-d1ff0624c836', '1446329813274-7c9036bb9a15', '1441974231531-c6227dbb6b9e',
  '1501854140801-50d01698950b', '1464822759023-fed622ff2c3b', '1473448912268-2022ce9509d8',
  '1428908728789-d2de8ae74ce3', '1490682143684-1436f118d6ee', '1441441247730-d0952915064e',
  '1476820865390-c52aeebb9891', '1482938289607-9c9cee37c37c', '1469474968028-56623f02e42e',
  '1475924156734-496f6cac6ec1', '1471115853179-bb1d604434e0', '1502082553048-f009c37129b9',
  '1447752809965-9761f274dda0', '1433086966358-54859d0ed716'
];

async function check() {
  const good = [];
  for (const id of ids) {
    if (good.length >= 12) break;
    await new Promise(resolve => {
      https.get('https://images.unsplash.com/photo-' + id + '?q=80&w=10&auto=format', res => {
        if (res.statusCode === 200 && res.headers['content-type'] && res.headers['content-type'].startsWith('image/')) {
          good.push(id);
        }
        res.resume();
        resolve();
      }).on('error', () => resolve());
    });
  }
  fs.writeFileSync('good_ids.json', JSON.stringify(good, null, 2));
}

check();
