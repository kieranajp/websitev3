<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kieran Patel | Web Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" href="reset.css">
</head>
<body>
    <main></main>

    <?php if (stristr($_SERVER['HTTP_HOST'], 'kieranajp.co.uk')): ?>
        <script src="/dist/compiled.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-42998161-3', 'auto');
            ga('send', 'pageview');
        </script>
    <?php else: ?>
        <script src="/jspm_packages/system.js"></script>
        <script src="/config.js"></script>
        <script>
            System.trace = true;
            System.import('./js/main');
        </script>
    <?php endif; ?>
</body>
</html>
