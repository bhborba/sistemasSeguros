import Forge from 'node-forge';

const fs = require('fs');

class HashController {
  // eslint-disable-next-line class-methods-use-this
  index(req, res) {
    const text = fs.readFileSync(req.file.path, 'utf8');
    let md;
    if (req.params.tipo === 'sha1') {
      md = Forge.md.sha1.create();
      console.log('Fez sha1');
    } else if (req.params.tipo === 'sha256') {
      md = Forge.md.sha256.create();
      console.log('Fez sha256');
    } else {
      md = Forge.md.md5.create();
      console.log('Fez MD5');
    }
    md.update(text);
    console.log(md.digest().toHex());
    return res.status(200).json({ ok: 'Sucesso' });
  }
}

export default new HashController();
