<?php require_once("_includes/liquidhead.php"); ?>
<div id="connectFrame">
<div id="winFrame"></div>
<div id="loseFrame"></div>
<div id="shield"></div>
<div id="loseimg"></div>
<div id="winimg"></div>
<div id="Framework"></div>
<div id="colA" class="column" onclick="javascript: connect('A');" onmouseover="javascript: showEmpty('A');" onmouseout="javascript: hideEmpty('A');"></div>
<div id="colB" class="column" onclick="javascript: connect('B');" onmouseover="javascript: showEmpty('B');" onmouseout="javascript: hideEmpty('B');"></div>
<div id="colC" class="column" onclick="javascript: connect('C');" onmouseover="javascript: showEmpty('C');" onmouseout="javascript: hideEmpty('C');"></div>
<div id="colD" class="column" onclick="javascript: connect('D');" onmouseover="javascript: showEmpty('D');" onmouseout="javascript: hideEmpty('D');"></div>
<div id="colE" class="column" onclick="javascript: connect('E');" onmouseover="javascript: showEmpty('E');" onmouseout="javascript: hideEmpty('E');"></div>
<div id="colF" class="column" onclick="javascript: connect('F');" onmouseover="javascript: showEmpty('F');" onmouseout="javascript: hideEmpty('F');"></div>
<div id="colG" class="column" onclick="javascript: connect('G');" onmouseover="javascript: showEmpty('G');" onmouseout="javascript: hideEmpty('G');"></div>
<div id="eA" class="6"></div>
<div id="eB" class="6"></div>
<div id="eC" class="6"></div>
<div id="eD" class="6"></div>
<div id="eE" class="6"></div>
<div id="eF" class="6"></div>
<div id="eG" class="6"></div>
<div id="counters"></div>

</div>
<button onmousedown="javascript: clearCounters();" id="newGame">New Game</button>
<?php require_once("_includes/liquidfooter.php"); ?>