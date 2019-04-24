<?php
//step1



$cSession = curl_init();

$apiKey = "BQDHgwLhcRsPTxLGo02XEbgf187sOocEU07Faotu3DkDo_FaJrradiGcHTDckCxELQlk_zOABImbfq3jbED1nlPNpMu7QW3C-takHS-Utwfo3w7BzEe9l7-DaInp8YCB_CAJ_DFnFhKWf1Wo3z8tSjjj7n4dFkkCnyaed6qqevaxNfd0CEE";

//step2
curl_setopt($cSession,CURLOPT_URL,"https://api.spotify.com/v1/browse/featured-playlists");
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false);
curl_setopt($cSession,CURLOPT_HTTPHEADER, array(
    "Accept: application/json",
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey"
));

//step3
$results = curl_exec($cSession);
$errno = curl_errno($cSession);



//step4
curl_close($cSession);

//step5
$musicData = json_decode($results);

echo json_encode($musicData->playlists->items[0]);

?>
 