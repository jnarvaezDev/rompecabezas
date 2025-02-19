<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/puzzle.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="row-container" id="data_cancela">
        <div
            class="row row-parent un-sidebar-layout' . $row_classes . $limit_content_width . '"' . $page_custom_width . '>
            <div class="row-inner">
                <div id="tabla" style="margin: 0 auto;width: 100%;">

                    <main style="display: inline;width: 50%;float: left;">
                        <div id="puzzle-ini" data-option-a="a-'.$a.'" data-option-i="i-'.$i.'">
                            <div class="cronometer">
                                <div class="cronometer-container">
                                    <div class="cronometer-row">
                                        <span id="hours">00</span>:<span id="minutes">00</span>:<span
                                            id="seconds">00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="move">
                                Movimientos <span class="mov"></span>
                            </div>
                            <div id="canvas"></div>
                            <div id="previews"></div>

                        </div>
                    </main>

                    <main style="display: inline;width: 50%;float: left;">
                        <div style="margin-right: 200px;">
                            <div class="banner" style="padding: 20px;border-radius: 20px;">
                                <p style="font-size: 12px;margin-top: 53px;">
                                    En el Reto Rayovac, el número de movimientos será tu aliado y te dará puntaje
                                    adicional. Entre menos movimientos más puntos obtendrás, un ejemplo aquí: <br>
                                    Ejemplo: Si logras resolver el rompecabezas en 13 movimientos o menos tendrás 14
                                    puntos en total. <br>
                                    Si lo resuelves en 14 movimientos, tendrás 13 puntos en total.
                                </p>
                                <table class="table" style="font-size:15px;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>Movimientos</th>
                                            <th>Puntos Ganados</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $points = 13;
                                        for ($i = 13; $i <= 26; $i++) {
                                            if ($points < 1) {
                                                $points = 1;
                                            }
                                            echo '<tr><td>' . $i . '</td><td>' . $points-- . '</td></tr>';
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>


    <article id="post-" class="">
        <div class="post-wrapper">
            <div class="post-body">

            </div>
        </div>
    </article>
</body>

</html>