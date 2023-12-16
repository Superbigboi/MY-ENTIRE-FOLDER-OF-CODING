$('#btn').click(()=>{
    $("#demo").html("<p> this is a fresh paragraph </p>")
    // alert($("#input").val())
    $("#input").val("the input field's value has changed")


})
$('#btn').dblclick(()=>{
    $("#demo").html("<p> this is <b>bold</b> </p>")
    // $("#input").val("type somrhing")
})

const value = ["Dubstep", "Drum and Bass","Electro",];
const Numbers = [50, 30, 20];
const barColors = ["red", "blue","green"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: value,
    datasets: [{
      backgroundColor: barColors,
      data: Numbers
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "Music I listen to"
    }
  }
});

new Chart("Video_Games", {
  type: "doughnut",
  data: {
    labels: value,
    datasets: [{
      backgroundColor: barColors,
      data: Numbers
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "Games I Play"
    }
  }
});




new Chart("Anime", {
  type: "bar",
  data: {
    labels: value,
    datasets: [{
      backgroundColor: barColors,
      data: Numbers
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Animes I like"
    }
  }
});

const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("Sports", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// new Chart("Sports", {
//   type: "line",
//   data: {
//     labels: value,
//     datasets: [{
//       backgroundColor: barColors,
//       data: Numbers
//     }]
//   },
//   options: {
//     legend: {display: true},
//     title: {
//       display: true,
//       text: "Sports I like"
//     }
//   }
// });

