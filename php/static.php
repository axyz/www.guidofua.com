<?php 

$value = basename($_GET["img"]);
$parts = Explode('.', $value);
$title = $parts[count($parts) - 2];
$parts = Explode('-', $title);
$title = $parts[1];

echo "

<html itemscope itemtype='http://schema.org/Photograph'>
<head>
<meta itemprop='name' content='" . $title . "'>
<meta itemprop='author' content='Guido Fu&agrave;'>
<title> " . $title . " - by Guido Fu&agrave; - Eikona photography and digital imaging.</title>
<meta itemprop='description' content='photo by Guido Fu&agrave; - Eikona photography and digital imaging.'>
<link rel='image_src' href='" . urldecode($_GET["img"]) . "' />
<meta property='og:image' content='" . urldecode($_GET["img"]) . "'/>
<meta property='og:title' content='" . $title . "'/>
<meta property='og:site_name' content='guidofua.com'/>
<meta property='og:description' content='photo by Guido Fu&agrave; - Eikona photography and digital imaging.'/>

<link rel='stylesheet' href='http://www.guidofua.com/css/style.css?v=2'>
  <link rel='stylesheet' href='http://www.guidofua.com/css/fluid_grid.css'>
  <link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Oswald:400,300|Raleway:100|Cantarell'>

</head>

<body style='background-color:rgba(100, 100, 100, 1);'>

	<div style='text-align:center;'>
		<a href='http://www.guidofua.com'>
			<div id='logo'><img height='55' src='http://www.guidofua.com/img/icon.png' /></div>
    	<div id='logo2'>Guido Fu&agrave; Photography</div>
    </a>
    <a style='position:fixed;right:5px;' href='http://www.eikona.eu'><img src='http://www.eikona.eu/img/eikona_guido.png' /></a>
		<div style='text-align:center;margin-top:10px;'>
			<img itemprop='image' style='height:100%;' src='" . urldecode($_GET["img"]) . "' />
			<div itemprop='aggregateRating' itemscope itemtype='http://schema.org/AggregateRating'>
					<meta itemprop='ratingValue' content='5' /> 
    			<meta itemprop='ratingCount' content='196' />
    	</div>
		</div>
	</div>

</body>
</html>

 ";
?>