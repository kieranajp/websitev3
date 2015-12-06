<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JSPM Test</title>
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" href="reset.css">
</head>
<body>
    <main></main>

    <?php if (stristr($_SERVER['HTTP_HOST'], 'kieranajp.co.uk')): ?>
        <script src="/dist/compiled.js"></script>
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
