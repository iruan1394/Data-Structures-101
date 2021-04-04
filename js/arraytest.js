function initialize(){
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
                  suggestedMax: 3
              },
              scaleLabel: {
                display: true,
                labelString: 'Runtime (milliseconds)'
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
      for(var i = 0; i <= pointsnum; i++)
        times.push(arrayAccess(i*100000).toFixed(5));
      document.getElementById("arrayexp").innerHTML = "Arrays have a property known as random access. This means that no matter how many elements are within, accessing any index within an array will take the same amount of time. Thus, array accessing will take constant time.";
      break;

    case 2:
      lab = "Search"
      for(var i = 0; i <= pointsnum; i++)
        times.push(arraySearch(i*100000).toFixed(5));

      if(times[1] > times[3] * 2){ // ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arraySearch(i*100000).toFixed(5));
      }

      document.getElementById("arrayexp").innerHTML = "Because arrays do not store their contents in a specific order, the only way to find an element within one is to blindly go through the array until one of two things happen. Either the target is found, or the end of the array has been reached. This process takes longer if the target is near the end of the array or if the array is simply very large. Array search will take increasing time as the array grows."
      break;

    case 3:
      lab = "Front Insertion"
      for(var i = 0; i <= pointsnum; i++)
        times.push(arrayFInsert(i*100000).toFixed(5));

      if(times[1] > times[3] * 2){ // ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arrayFInsert(i*100000).toFixed(5));
      }

      document.getElementById("arrayexp").innerHTML = "In order to insert an element into an array at a position that's not the last, the element that was originally at that position and every element after it need to be shifted forward. This is an extremely cumbersome process and scales with the array's size."
      break;

    case 4:
      lab = "End Insertion"
      for(var i = 0; i <= pointsnum; i++)
        times.push(arrayEInsert(i*100000).toFixed(5));
      document.getElementById("arrayexp").innerHTML = "Inserting at an end of an array is a much simpler process than inserting at any other position. There is no shifting of elements that needs to be done. As a result, array end insertion will not be affected by the array's size and will take constant time."
      break;

    case 5:
      lab = "Front Deletion"
      for(var i = 0; i <= pointsnum; i++)
        times.push(arrayFDelete(i*100000).toFixed(5));

      if(times[1] > times[3] * 2){ // ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(arrayFDelete(i*100000).toFixed(5));
      }
      document.getElementById("arrayexp").innerHTML = "Removing an element from an array is quite costly when the target's position is not the last. After the element has been deleted, every element positioned after it needs to be shifted back to fill in the gap. Similar to front insertion, array front deletion will take more time as arraay size increases."
      break;

    case 6:
      lab = "End Deletion"
      for(var i = 0; i <= pointsnum; i++)
        times.push(arrayEDelete(i*100000).toFixed(5));
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
                suggestedMax: 3
            },
            scaleLabel: {
              display: true,
              labelString: 'Runtime (milliseconds)'
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

function arrayAccess(length){ // create array with size length and measure the time needed to access the middle element
  var arr = [];
  for (var i = 1; i <= length; i++)
    arr.push(i);

  var t1 = performance.now()

  if(length==0){ // if array is empty, stop and return
    return (performance.now() - t1);
  }
  var temp = arr[Math.floor(length/2)];
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

  for(var j = 0; j < length-1; j++){
    if(arr[j]==target){
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
}