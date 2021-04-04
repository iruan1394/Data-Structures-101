class Queue{
    constructor(){
        this.data = [];
    }
    enqueue(val){
        this.data.push(val);
    }
    dequeue(){
        if(this.size() == 0)
            return null;
        return this.data.shift();
    }
    size(){
        return this.data.length;
    }
    toString(){
        return this.data.toString();
    }
    getFront(){
        if(this.size() == 0)
            return null;
        return this.data[0];
    }
}

function initialize(){
    ran = [false, false, false, false];
    pointsnum = 10; // # of points we want on our graph
    xAxisLabels = []
    for(var i = 0; i <= pointsnum; i++)
        xAxisLabels.push(i*1000)

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
            text: 'Queue Time Efficiencies',
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

function queueGraph(num){
    var times = [];
    var lab = "";
    switch(num) {
        case 1:
        lab = "Access"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueAccess(i*1000).toFixed(5));
        if(!ran[0]){ // ignore dataset from first run
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(queueAccess(i*1000).toFixed(5));
            ran[0] = true;    
        }
        document.getElementById("queueexp").innerHTML = "Accessing the front element of queue will always take the same amount of time no matter how large the queue becomes. However, in order to access any other element within the queue, every element in front of it needs to be dequeued and then enqueued. Once the access is performed, more enqueuing and dequeuing needs to be done until the elements are in their original order. This process will take longer as the queue grows in size as more elements will need to be rearranged.";
        break;

        case 2:
        lab = "Search"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueSearch(i*1000).toFixed(5));
        if(!ran[1]){ // ignore dataset from first run
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(queueSearch(i*1000).toFixed(5));
            ran[0] = true;    
        }
        document.getElementById("queueexp").innerHTML = "Queues do not sort their elements in any particular order. In order to find a specific element, the only method available is to blindly go through the queue until either the target is found or all elements have been checked. This is done by continously checking the front element, dequeuing it, and then enqueuing. Even after the target's been found, the queue must be returned to its original state. This process scales along with the queue's size since there would be more elements that need to be checked.";
        break;

        case 3:
        lab = "Front Insertion"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueFInsert(i*1000).toFixed(5));
        if(!ran[2]){ // ignore dataset from first run
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(queueFInsert(i*1000).toFixed(5));
            ran[0] = true;    
        }
        document.getElementById("queueexp").innerHTML = "Standard queues only allow for direct insertion at its back. In order to insert an element at the front of a queue, it must first be inserted at the back. Then, every element in front of it must be dequeued and enqueued back in. This process will take longer if the queue has a lot of elements so its runtime scales with queue size. Of course, this doesn't apply to deques which allow for direct insertion at the front.";
        break;

        case 4:
        lab = "Back Insertion"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueBInsert(i*1000).toFixed(5));
        document.getElementById("queueexp").innerHTML = "In order to insert an element at the back of a queue, it just needs to be enqueued. Enqueuing is fast, and its runtime is not affected by the number of elements within the queue.";    
        break;

        case 5:
        lab = "Front Deletion"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueFDelete(i*1000).toFixed(5));
        document.getElementById("queueexp").innerHTML = "Similar to back insertion, queues allow for direct deletion from the front. This is done by simply running a dequeue. The dequeue function is fast and will always take the same amount of time regardless of the queue's size.";   
        break;

        case 6:
        lab = "Back Deletion"
        for(var i = 0; i <= pointsnum; i++)
            times.push(queueBDelete(i*1000).toFixed(5));
        if(!ran[3]){ // ignore dataset from first run
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(queueBDelete(i*1000).toFixed(5));
            ran[0] = true;    
        }
        document.getElementById("queueexp").innerHTML = "While deleting from the front of a queue is fast and simple, deleting from any other position is not. Every element in front of the target position will need to be dequeued and enqueued to put the target at the front. Once the deletion is done, more enqueuing and dequeuing needs to be done to put the elements in their original order. Deleting from the back of the queue will scale along with the queue's size since more elements will need to be rearranged. Doesn't apply to deques which allow for direct back deletion.";   
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
                text: 'Queue Time Efficiencies',
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

function queueAccess(length){ // creates a queue with length elements and accesses the middle element
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);
    
    var t1 = performance.now();

    for(var j = 0; j < Math.floor(length/2); j++) // put the middle at the front of the queue
        q.enqueue(q.dequeue());
    
    var mid = q.getFront(); // access

    for(var k = 0; k < Math.ceil(length/2); k++) // return the queue to its original state
        q.enqueue(q.dequeue());

    return (performance.now() - t1);
}

function queueSearch(length){ // creates a queue with length elements and searches for the middle element
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);

    var t1 = performance.now();
    var output = -1; 

    for(var j = 0; j < length; j++){ // iterate through the queue entirely
        if(q.getFront() == Math.floor(length/2)) 
            output = j;
        q.enqueue(q.dequeue());
    }

    return (performance.now() - t1);
}

function queueFInsert(length){ // creates a queue with length elements and inserts 0 at the front
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);

    var t1 = performance.now();

    q.enqueue(0); // insert at end of queue

    for(var j = 0; j < length; j++) // keep enqueuing q.dequeue until 0 is at front
        q.enqueue(q.dequeue());

    return (performance.now() - t1);
}

function queueBInsert(length){ // creates a queue with length elements and enqueues 0
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);
    
    var t1 = performance.now();
    q.enqueue(0);

    return (performance.now() - t1);
}

function queueFDelete(length){ // creates a queue with length elements and dequeues
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);
    
    var t1 = performance.now();
    q.dequeue();

    return (performance.now() - t1);
}

function queueBDelete(length){ // creates a queue with length elements and removes element at back
    var q = new Queue();
    for(var i = 1; i <= length; i++)
        q.enqueue(i);

    var t1 = performance.now();
    for(var j = 0; j < length-1; j++) // puts back element at front
        q.enqueue(q.dequeue());
    
    q.dequeue(); // remove the back element, returning queue to original order

    return(performance.now() - t1);
}
