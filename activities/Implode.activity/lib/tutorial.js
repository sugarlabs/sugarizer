define(["webL10n"], function (l10n) {
    var tutorial = {};

    tutorial.start = function() {
        var steps = [
            {
                element: "",
                orphan: true,
                placement: "bottom",
                title: l10n.get("TutoExplainTitle"),
                content: l10n.get("TutoExplainContent")
            },
            {
                element: "#mainCanvas",
                placement: "top",
                title: l10n.get("HowToPlayTitle"),
                content: l10n.get("HowToPlayContent")
            },
            {
                element: "#new-game",
                placement: "bottom",
                title: l10n.get("NewGame"),
                content: l10n.get("NewGameContent")
            },
            {
                element: "#replay",
                placement: "bottom",
                title: l10n.get("Replay"),
                content: l10n.get("ReplayContent")
            },
            {
                element: "#undo",
                placement: "bottom",
                title: l10n.get("Undo"),
                content: l10n.get("UndoContent")
            },
            {
                element: "#redo",
                placement: "bottom",
                title: l10n.get("Redo"),
                content: l10n.get("RedoContent")
            },
            {
                element: "#easy",
                placement: "bottom",
                title: l10n.get("Easy"),
                content: l10n.get("EasyContent")
            },
            {
                element: "#medium",
                placement: "bottom",
                title: l10n.get("Medium"),
                content: l10n.get("MediumContent")
            },
            {
                element: "#hard",
                placement: "bottom",
                title: l10n.get("Hard"),
                content: l10n.get("HardContent")
            },
        ];
        if(window.innerHeight >= 500){
            steps.push({
                element: "",
                orphan: true,
                placement: "bottom",
                title: l10n.get("KeyboardKeysTitle"),
                content: l10n.get("KeyboardKeysContent")
            });
        }
        var tour = new Tour({
            template: "\
            <div class='popover tour'>\
                <div class='arrow'></div>\
                <h3 class='popover-title tutorial-title'></h3>\
                <div class='popover-content'></div>\
                <div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\
                    <div class='tutorial-prev-icon icon-button' data-role='prev'>\
                        <div class='tutorial-prev-icon1 web-activity'>\
                            <div class='tutorial-prev-icon2 web-activity-icon'></div>\
                            <div class='tutorial-prev-icon3 web-activity-disable'></div>\
                        </div>\
                        <div class='icon-tutorial-text'>"+l10n.get("TutoPrev")+"</div>\
                    </div>\
                    <span data-role='separator' style='margin: 4px'>|</span>\
                    <div class='tutorial-next-icon icon-button' data-role='next'>\
                        <div class='tutorial-next-icon1 web-activity'>\
                            <div class='tutorial-next-icon2 web-activity-icon'></div>\
                            <div class='tutorial-next-icon3 web-activity-disable'></div>\
                        </div>\
                        <div class='icon-tutorial-text'>"+l10n.get("TutoNext")+"</div>\
                    </div>\
                    <div class='tutorial-end-icon icon-button' data-role='end'>\
                        <div class='tutorial-end-icon1 web-activity'>\
                            <div class='tutorial-end-icon2 web-activity-icon'></div>\
                            <div class='tutorial-end-icon3 web-activity-disable'></div>\
                        </div>\
                        <div class='icon-tutorial-text'>"+l10n.get("TutoEnd")+"</div>\
                    </div>\
                </div>\
            </div>",
            storage: false,
            backdrop: true,
            steps: steps
        });
        tour.init();
        tour.start(true);

    };

    return tutorial;
});