var ActionQueue = function () {
    var queue = [],
        pointer = 0;

    return {
        undo: function () {
            if (pointer > 0) {
                pointer--;
                var action = queue[pointer];
                $(action.id).appendTo(action.from);
                moveStudent(action.id);
                updateCounts();
                $(action.id + ' .hide' + action.fAbbr).fadeOut(0);
                $(action.id + ' .' + action.fAbbr).fadeIn(0);

                this.updateDoodoo();
            }
        },
        redo: function () {
            if (pointer != queue.length) {
                var action = queue[pointer];
                console.log(action)

                $(action.id).appendTo(action.to);
                moveStudent(action.id);
                updateCounts();
                $(action.id + ' .hide' + action.tAbbr).fadeOut(0);
                $(action.id + ' .' + action.tAbbr).fadeIn(0);

                pointer++;
                this.updateDoodoo();
            }
        },
        updateDoodoo: function () {
            if (pointer == 0) {
                $("#undo").addClass("disabled");
                $("#undo").removeClass("enabled");
            }
            else {
                $("#undo").removeClass("disabled");
                $("#undo").addClass("enabled");
            }

            if (pointer == queue.length) {
                $("#redo").addClass("disabled");
                $("#redo").removeClass("enabled");
            }
            else {
                $("#redo").removeClass("disabled");
                $("#redo").addClass("enabled");
            }
        },
        addAction: function(action) {
                queue[pointer] = action;
                pointer++;
                if (pointer < queue.length) {
                  queue = queue.slice(0, pointer);
                }
                console.log(action.id, action.from, action.to);
                this.updateDoodoo();
        }
    }
}

var Action = function(id,from,to) {
    var idResolve = {'#answered': 'A',
             '#unanswered': 'U',
             '#markedForLater': 'L'
            }

    return {
        id: id,
        from: from,
        fAbbr: idResolve[from],
        to: to,
        tAbbr: idResolve[to]
    }
}