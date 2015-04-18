// Block instance consists of rhCount, nfCount
var Block = function (rhCount, nfCount) {
    return {rh: rhCount, nf: nfCount}
}

// array = 2d array containing Block instant
var ClassMap = function (div, array) {
    var widthRange = parseInt($('#actionField').css('width'), 10)-200,
        heightRange = Math.max(40,parseInt($('#actionField').css('height'), 10)-300);
    var DEFAULT_ROW_COUNT = 2,
        DEFAULT_COL_COUNT = 3;
    var rowCount = array? array.length: DEFAULT_ROW_COUNT;
    for (var row = 0; row < rowCount; row++) {
        div.append("<div class='row'></div>")
        var rowDiv = div.find(">.row:last");
        var colCount = array? (array[row].length || DEFAULT_COL_COUNT): DEFAULT_COL_COUNT;
        var height = heightRange/rowCount;
        for (var col = 0; col < colCount; col++) {
            var width = widthRange/colCount;
            var rh = array? (array[row][col].rh || 2): 2,
                nf = array? (array[row][col].nf || 2): 2;
            var style = "style='width:" + width + "px;height:" + height + "px;'";
            rowDiv.append("<div class='block col'" + style + ">" + 
                "<div class='counter rhTabSelected ovTabSelected'>" +rh +
                    " <img class='blockRhIcon' src='graphics/iconRaisedHand.png'>" +
                "</div>" +
                "<div class='counter nfTabSelected ovTabSelected'>" + nf +
                    " <img class='blockNfIcon' src='graphics/iconNotFocusing.png'>" +
                "</div>" +
            "</div>");
        }
    }
    div.append("<div class='row'><div class='col dummy'></div><div class='col' style='height: 40px;'>Front</div><div class='col dummy'></div></div>")

    return {
        // get the div representing a specific block
        getBlock: function(row, col) {
            var rowDiv = div.children('.row')[row];
            return $(rowDiv).children('.col')[col];
        }
    }
}