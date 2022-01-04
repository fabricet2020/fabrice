var menuArray = [
    {label: "Week 01 Submission", url:"works/week01.html"},
    {label: "Week 02 Submission", url:"works/week02.html"},
    {label: "Week 03 Submission", url:"works/week03.html"},
    {label: "Week 04 Submission", url:"works/week04.html"},
    {label: "Week 05 Submission", url:"works/week05.html"},
    {label: "Week 06 Submission", url:"works/week06.html"},
    {label: "Week 07 Submission", url:"works/week07.html"},
    {label: "Week 08 Submission", url:"works/week08.html"},
    {label: "Week 09 Submission", url:"works/week09.html"},
    {label: "Week 10 Submission", url:"works/week10.html"},
    {label: "Week 11 Submission", url:"works/week11.html"},
    {label: "Week 12 Submission", url:"works/week12.html"},
    {label: "Week 13 Submission", url:"works/week13.html"},
    {label: "Week 14 Submission", url:"works/week14.html"}
]

function dynamicTableLoader() {
    var display = "";
    var i;
    // FOR loop to loop through array and display the content in a <li> tag
    for (i in menuArray) {
        display += "<li><a href=\"" + menuArray[i].url + "\">" + menuArray[i].label + "</a></li>";
    }
        document.getElementById("courselink").innerHTML = display;
}
