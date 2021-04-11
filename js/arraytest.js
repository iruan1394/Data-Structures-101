function initialize(){
  ran = [false, false, false];
    pointsnum = 10; // # of points we want on our graph
    xAxisLabels = []
    for(var i = 0; i <= pointsnum; i++){
      xAxisLabels.push(i*100000)
    }
    myChart = new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: xAxisLabels,
        datasets: [
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Array Time Efficiencies',
          fontSize: 16
        },
        scales: {
          yAxes: [{
              ticks: {
                  suggestedMin: 0,
                  suggestedMax: 30
              },
              scaleLabel: {
                display: true,
                labelString: 'Runtime (microseconds)'
              }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Size (# of elements)'
            }
          }]
        }
      }
    });
}

function arrayGraph(num){
  var times = []; // stores runtimes of functions while array size increases
  var lab = "";
  switch(num) {
    case 1:
      lab = "Access"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arrayAccess(i*100000).toFixed(5));*/
      times = [0.0, 0.049698, 0.050497, 0.050501, 0.0355, 0.039597, 0.035601, 0.0354, 0.034997, 0.036801, 0.0351];
      document.getElementById("arrayexp").innerHTML = "Arrays have a property known as random access. This means that no matter how many elements are within, accessing any index within an array will take the same amount of time. Thus, array accessing will take constant time.";
      break;

    case 2:
      lab = "Search"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arraySearch(i*100000).toFixed(5));

      if(!ran[0]){ // ignore first dataset
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arraySearch(i*100000).toFixed(5));
        ran[0] = true;
      }*/
      times = [0.0, 0.817098, 1.529196, 2.308202, 3.000202, 3.694101, 4.4591, 5.187698, 5.944195, 6.712999, 7.815198];
      document.getElementById("arrayexp").innerHTML = "Because arrays do not store their contents in a specific order, the only way to find an element within one is to blindly go through the array until one of two things happen. Either the target is found, or the end of the array has been reached. This process takes longer if the target is near the end of the array or if the array is simply very large. Array search will take increasing time as the array grows."
      break;

    case 3:
      lab = "Front Insertion"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arrayFInsert(i*100000).toFixed(5));

      if(!ran[1]){ // ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arrayFInsert(i*100000).toFixed(5));
        ran[1] = true;
      }*/
      times = [0.0, 2.531801, 5.036515, 8.146004, 11.1773, 12.648608, 15.239898, 17.914992, 20.591294, 23.250892, 25.868113];
      document.getElementById("arrayexp").innerHTML = "In order to insert an element into an array at a position that's not the last, the element that was originally at that position and every element after it need to be shifted forward. This is an extremely cumbersome process and scales with the array's size."
      break;

    case 4:
      lab = "End Insertion"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arrayEInsert(i*100000).toFixed(5));*/
      times = [0.0, 0.0307, 0.032695, 0.029196, 0.033898, 0.032601, 0.0318, 0.033902, 0.031399, 0.033098, 0.0325];
      document.getElementById("arrayexp").innerHTML = "Inserting at an end of an array is a much simpler process than inserting at any other position. There is no shifting of elements that needs to be done. As a result, array end insertion will not be affected by the array's size and will take constant time."
      break;

    case 5:
      lab = "Front Deletion"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arrayFDelete(i*100000).toFixed(5));

      if(!ran[2]){ // ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arrayFDelete(i*100000).toFixed(5));
        ran[2] = true;
      }*/
      times = [0.0, 2.570889, 5.045929, 8.390601, 10.070499, 12.833178, 15.271706, 17.983911, 20.948801, 22.91327, 25.337944];
      document.getElementById("arrayexp").innerHTML = "Removing an element from an array is quite costly when the target's position is not the last. After the element has been deleted, every element positioned after it needs to be shifted back to fill in the gap. Similar to front insertion, array front deletion will take more time as arraay size increases."
      break;

    case 6:
      lab = "End Deletion"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(arrayEDelete(i*100000).toFixed(5));*/
      times = [0.0, 0.031504, 0.032702, 0.031397, 0.034001, 0.034998, 0.033, 0.034401, 0.031798, 0.031599, 0.032999];
      document.getElementById("arrayexp").innerHTML = "Similar to end insertion, end deletion of an array does not require much work. Since there are no elements that come after it, there is no need to do any shifting. Thus, this function's runtime will be unaffected by the array's size and take constant time."
      break;  
      
    default:
  }
  myChart.destroy() // clear previous graph
  myChart = new Chart(document.getElementById("line-chart"), { // create new graph with new dataset
    type: 'line',
    data: {
      labels: xAxisLabels,
      datasets: [{ 
          data: times,
          label: lab,
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Array Time Efficiencies',
        fontSize: 16
      },
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 30
            },
            scaleLabel: {
              display: true,
              labelString: 'Runtime (microseconds)'
            }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Size (# of elements)'
          }
        }]
      }
    }
  });
}

/*function arrayAccess(length){ // create array with size length and measure the time needed to access the middle element
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);
  var target = Math.floor(length/2) - 1;
  var t1 = performance.now()

  if(length==0){ // if array is empty, stop and return
    return (performance.now() - t1);
  }
  var temp = arr[target];
  return (performance.now() - t1);
}

function arraySearch(length){ // create arraay with size length and measure the time needed to find an element at the middle
  var arr = [];

  for (var i = 1; i <= length; i++)
    arr.push(i);
  
  var target = Math.floor(length/2);
  var t1 = performance.now()

  if(length==0){ // if array is empty, stop and return
    return (performance.now() - t1);
  }

  for(var j = 0; j < arr.length; j++){
    if(arr[j] == target){
      return (performance.now() - t1);
    }
  }

  return (performance.now() - t1);
}


function arrayFInsert(length){ // create array with size length and measure the time needed to insert a new element at its front. Did not use array.splice because graph did not resemble theta(n)
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);

  var t1 = performance.now()
  
  if(length==0){
    return (performance.now() - t1);
  }

  for(var j = length-1; j > 0; j--)
    arr[j] = arr[j-1];
  
  arr[0] = 0;


  return(performance.now()-t1);
}

function arrayEInsert(length){ // create array with size length and measure the time needed to insert a new element at its end
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);
  var t1 = performance.now()
  
  if(length==0){
    return (performance.now() - t1);
  }

  arr.push(0);

  return(performance.now()-t1);
}

function arrayFDelete(length){ // create array with size length and measure the time needed to delete the first element. Did not use array.splice because graph did not resemble theta(n)
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);

  var t1 = performance.now()

  if(length==0){
    return (performance.now() - t1);
  }
  
  for(var j = 0; j < length-1; j++)
    arr[j] = arr[j+1];

  arr.pop();

  return(performance.now()-t1);

}

function arrayEDelete(length){ // create array with size length and measure the time needed to delete the last element.
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);

  var t1 = performance.now()

  if(length==0){
    return (performance.now() - t1);
  }   

  arr.pop();
  
  return(performance.now()-t1);
}*/

