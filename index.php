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
                                        <tr>
                                            <td>13</td>
                                            <td>13</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td>11</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>19</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>24</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>26</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</body>

</html>