<?php require_once("_includes/liquidhead.php"); ?>
<p>Population: &nbsp;
<input type="text" name="population" value="Enter a population" id="population" /></p>
<p>Pattern: &nbsp;
<span id="pattern"></span></p>
<p>Total Plates: &nbsp;
<soan id="plates"></span></p>
<p>Excess Plates: &nbsp;
<span id="excess"></span></p>
<button class="generate" onclick="javascript:plates();">Generate Plates!</button>

<?php require_once("_includes/liquidfooter.php"); ?>