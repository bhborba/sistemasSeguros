class HashController {
  index(req, res) {
    return res.status(200).json({ ops: 'Deu Boa' });
  }
}

export default new HashController();
