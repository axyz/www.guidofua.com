<?php
	
	/* crea una galleria di immagini, $pathToRoot è il path per arrivare alla root directory es. "../"
	$dir è la directory assoluta nella quale si trovano le foto in .jpg e $rel è un nome per la gallery */ 
	function makeGallery($pathToRoot, $dir){
		/* salva elenco file della directory $dir nell'array $files */
		$reldir = $pathToRoot . $dir;
		$files = array();

		if (is_dir($reldir)) {
    		if ($dh = opendir($reldir)) {
        		while (($file = readdir($dh)) !== false) {
        			$ext = substr(strrchr($file, '.'), 1);
        			if($ext == "jpg"){
         			$files[] = $file;
         		}
        		}
        		closedir($dh);
    		}
		}
		
		/* sorting */
		natsort($files);		
		
		/* stampa gli elementi di $files */
		foreach($files as $el){
			$parts = Explode('.', $el);
    		$name = $parts[count($parts) - 2];
    		$parts = Explode('-', $name);
    		$name = $parts[1];
			echo '<a href="' . $dir . $el . '" alt="' . $name . '" title="' . $name . '"><img src="' . $dir . 'thumbs/' . $el . '" /></a>';
		}
	}
		
?>