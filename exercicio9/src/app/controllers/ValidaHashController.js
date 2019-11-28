import Forge from 'node-forge';

const fs = require('fs');

class ValidaHashController {
  // eslint-disable-next-line class-methods-use-this
  index(req, res) {
    const text = fs.readFileSync(req.file.path, 'utf8');
    let md;
    md = Forge.md.sha1.create();
    md.update(text);
    if (req.body.valor === md) {
      md = Forge.md.sha1.create();
      console.log('Fez sha1. O arquivo está integro');
      return res.status(200).json({ ok: 'Sucesso' });
    }
    md = Forge.md.sha256.create();
    md.update(text);
    if (req.body.valor === md) {
      console.log('Fez sha256. O arquivo está integro');
      return res.status(200).json({ ok: 'Sucesso' });
    }
    md = Forge.md.md5.create();
    md.update(text);
    if (req.body.valor === md.digest().toHex()) {
      console.log('Fez MD5. O arquivo está integro');
      return res.status(200).json({ ok: 'Sucesso' });
    }
    console.log(md.digest().toHex());
    return res.status(400).json({ erro: 'O arquivo não está íntegro' });
  }
}

export default new ValidaHashController();
