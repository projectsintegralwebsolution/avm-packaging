<?php
// Canonical redirect from disclaimer.php to indexed disclamier.php
header("HTTP/1.1 301 Moved Permanently");
header("Location: disclamier.php");
exit();
