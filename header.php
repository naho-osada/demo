<?php
    $path = (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . '/demo';
?>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand text-white" href="https://engineer-lady.com/">HOME</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>">demo Top</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/dimple/">dimple.js</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/chart/">Chart.js</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/canvas/">Canvas Pop</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/loop/q01.php">for/foreach/while 01</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/loop/q02.php">for/foreach/while 02</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="<?php echo $path; ?>/loop/q03.php">for/foreach/while 03</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="https://github.com/naho-osada/demo">GitHub</a>
        </li>
    </ul>
    </div>
</nav>
