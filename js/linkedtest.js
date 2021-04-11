/*class Node{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}
class LinkedList{

  constructor(){ // I made the tail node a member variable to make it easier to create lists of large size. Without it, 
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  get(index){ // traverse through linked list and return value of node at inputted index
    if(index >= this.size || index < 0)
      return;
    else{
      var current = this.head;
      for(var i = 0; i < index; i++)
        current = current.next;
      
      return current.data;
    }
  }

  add(val){ // only used to populate lists, not used for end insertion. Sets input node as tail.next and makes it the new tail
    var n = new Node(val);

    if(this.head == null){ // if list is empty, inputted node becomes both head and tail
      this.head = n;
      this.tail = n;
    }
    else{
      this.tail.next = n;
      this.tail = n;
    }
    this.size++;
  }

  insert(val, index){  // I implemented these functions for linked list but did not actually use them
    if(index > this.size || index < 0)
      return;
    else{
      var n = new Node(val);
      if(index == 0){
        n.next = this.head;
        this.head = n;
      }
      else{
        var previous;
        var current = this.head;
        var currInd = 0;

        while(currInd < index){
          currInd++;
          previous = current;
          current = current.next;
        }

        n.next = current;
        previous.next = n;

        if(index == this.size)
          this.tail = n;
      }
      this.size++;
    }
  }

  remove(index){
    if(index >= this.size || index < 0)
      return;
    else{
      var previous;
      var current = this.head;
      var currInd = 0;
      if(index == 0)
        this.head = current.next;
      else{
        while(currInd < index){
          currInd++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      this.size--;
    }
  }

  find(val){ // traverse through linked list and search for val. If val is found, return index of node. Otherwise, return -1.
    var current = this.head;
    for (var i = 0; i < this.size; i++){
      if(current.data == val)
        return i;
      current = current.next;
    }
    return -1;
  }

  toString(){ // convert list to array and returns it as a string. Used to monitor list as operations are performed.
    var current = this.head;
    var arr = [];
    while(current != null){
      arr.push(current.data);
      current = current.next;
    }
    return arr.toString();
  }
}*/
function initialize(){
  ran = [false, false];
  pointsnum = 10; // # of points we want on our graph
  xAxisLabels = []
  for(var i = 0; i <= pointsnum; i++)
    xAxisLabels.push(i*100000)

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
        text: 'Linked List Time Efficiencies',
        fontSize: 16
      },
      scales: {
        yAxes: [{
            ticks: {
                 suggestedMin: 0,
                suggestedMax: 200
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

function linkedGraph(num){
  var times = [];
  var lab = "";
  switch(num) {
    case 1:
      lab = "Access"
      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedAccess(i*100000).toFixed(5));

      if(!ran[0]){// ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(linkedAccess(i*100000).toFixed(5));
        ran[0] = true;
      }*/
      times = [0.0, 6.364002, 12.624099, 19.309299, 26.780202, 31.641799, 37.396601, 43.543898, 50.273302, 57.566399, 62.306503];
      document.getElementById("linkedexp").innerHTML = "In a linked list, only the head node can be accessed directly. In order to access any node after the head, the list must be traversed through until the target index is reached. This means the farther away from the head the target node is, the longer it will take to access it. This function's average run time will increase as the linked list's size increases.";
      break;

    case 2:
      lab = "Search"

      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedSearch(i*100000).toFixed(5));

      if(!ran[1]){// ignore dataset where runtime for 100000 is unnaturally high 
        times = [];
        for(var i = 0; i <= pointsnum; i++)
          times.push(linkedSearch(i*100000).toFixed(5));
        ran[1] = true;
      }*/
      times = [0.0, 9.237292, 18.006502, 27.452403, 36.153998, 45.197002, 53.867192, 63.252599, 71.250199, 80.339401, 89.611602];
      document.getElementById("linkedexp").innerHTML = "The nodes within a linked list are not ordered based on their values. In order to find a node containing a specific value within a linked list, the only method is to traverse through the list checking each node until either the target is found or the end of the list is reached. Like access, this function will take longer if the target is far away from the head. Thus, the average runtime of linked list searches will scale along with the list's size."
      break;

    case 3:
      lab = "Front Insertion"

      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedFInsert(i*100000).toFixed(5));*/
      times = [0.0, 0.051098, 0.076598, 0.084704, 0.087692, 0.091498, 0.079499, 0.0555, 0.056902, 0.056296, 0.058604];
      document.getElementById("linkedexp").innerHTML = "Inserting a node at the front of a linked list is quite simple. All that needs to be done is set the target node as the list's new head. The target node will point to the original head as its next. This process can be completed quickly, and its runtime is not affected by the linked list's size."
      break;

    case 4:
      lab = "End Insertion"

      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedEInsert(i*100000).toFixed(5));*/
      times = [0.0, 0.044999, 0.040899, 0.042203, 0.041001, 0.050306, 0.064402, 0.050202, 0.048001, 0.054999, 0.047298];
      document.getElementById("linkedexp").innerHTML = "Linked list end insertion is not very complicated. Assuming that the list has already been traversed, all that needs to be done is set the tail node's next as the target node. The target node would thus become the list's new tail. Like front insertion, end insertion's runtime is not affected by the linked list's size."
      break;

    case 5:
      lab = "Front Deletion"

      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedFDelete(i*100000).toFixed(5));*/
      times = [0.0, 0.097802, 0.136603, 0.135597, 0.132698, 0.134105, 0.060703, 0.072898, 0.067897, 0.117401, 0.052597];
      document.getElementById("linkedexp").innerHTML = "In order to delete the head node of a linked list, all that needs to be done is set the list's head to be the second node in the list. The original head node will thus be removed from the list entirely. This function takes constant time regardless of the linked list's size."
      break;

    case 6:
      lab = "End Deletion"

      /*for(var i = 0; i <= pointsnum; i++)
        times.push(linkedEDelete(i*100000).toFixed(5));*/
      times = [0.0, 0.043003, 0.055198, 0.059903, 0.060999, 0.088798, 0.038402, 0.040198, 0.036601, 0.038103, 0.0401];
      document.getElementById("linkedexp").innerHTML = "Deleting the tail node of a linked list does not require much work. Assuming the list has been traversed, all that needs to be done is set the second last node within the list to point to null. That node would become the list's new tail. Like front deletion, this function takes constant time regardless of the linked list's size."
      break;  
      
    default:
  }
  myChart.destroy()
  myChart = new Chart(document.getElementById("line-chart"), {
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
        text: 'Linked List Time Efficiencies',
        fontSize: 16
      },
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 200
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

/*function linkedAccess(length){ // create linked list with length nodes and measure time needed to access the middle node
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  
  var target = Math.floor(length/2);
  var t1 = performance.now();
  
  if(length == 0)
    return (performance.now() - t1);

  var temp = lst.get(target);
  return (performance.now() - t1);
}

function linkedSearch(length){ // create linked list with length nodes and measure time needed to find a node located in the middle of the list
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  
  var target = Math.floor(length/2);
  var t1 = performance.now();

  if(length == 0)
    return (performance.now() - t1);
  
  var temp = lst.find(target);
  return (performance.now() - t1);
}

function linkedFInsert(length){ // create linked list with length nodes and measure time needed to insert a node at the front of the list
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  
  var t1 = performance.now();

  var n = new Node(0);
  n.next = lst.head;
  lst.head = n;
  return (performance.now() - t1);
}

function linkedEInsert(length){ // create linked list with length nodes, traverse to the end, and measure the time needed to insert a node there
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  

  var n = new Node(0);

  if(length == 0){ // if list is empty, just set n as the head
    let t1 = performance.now();
    lst.head = n;
    return (performance.now() - t1);
  }
  else{
    var current = lst.head;
    while(current.next != null)
      current = current.next;

    let t1 = performance.now();
    current.next = n;
    return(performance.now() - t1);
  }
}

function linkedFDelete(length){ // create linked list with length nodes and measure the time needed to remove the head node
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  
  var t1 = performance.now();

  if(length == 0) // if list is empty, nothing can be done
    return (performance.now() - t1);
  else{
    lst.head = lst.head.next;
    return(performance.now() - t1);
  }
}

function linkedEDelete(length){ // create linked list with length nodes, traverse to the end, and measure the time needed to remove the tail node
  var lst = new LinkedList();
  for(var i = 1; i <= length; i++)
    lst.add(i);
  var t1 = performance.now();
  switch(length){
    case 0: // if list is empty, nothing can be done
      return (performance.now() - t1);

    case 1: // if list only has 1 node, just set head to null
      lst.head == null;
      return (performance.now() - t1);

    default:
      var current = lst.head;
      var previous;

      while(current.next != null){
        previous = current;
        current = current.next;
      }

      t1 = performance.now();
      previous.next = current.next;
      return(performance.now() - t1);
  }
}*/