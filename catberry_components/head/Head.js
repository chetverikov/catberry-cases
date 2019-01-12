class Head {
  render() {
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <script src="/externals.js" type="text/javascript"></script>
        <script src="/app.js" type="text/javascript"></script>
    `;
  }
}

module.exports = Head;
