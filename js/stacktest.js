/*class Stack{ // basic implementation of stack using array
    constructor(){
        this.data = [];
    }
    push(val){
        this.data.push(val);
    }
    pop(){
        if(this.size() == 0)
            return null;
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length - 1];
    }
    size(){
        return this.data.length;
    }
    toString(){
        return this.data.toString();
    }
}*/

function initialize(){
    ran = [false, false, false, false];
    pointsnum = 10; // # of points we want on our graph
    xAxisLabels = []
    for(var i = 0; i <= pointsnum; i++)
        xAxisLabels.push(i*10000)

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
            text: 'Stack Time Efficiencies',
            fontSize: 16
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 1400
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

function stackGraph(num){
    var times = [];
    var lab = "";
    switch(num) {
        case 1:
        lab = "Access"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackAccess(i*10000).toFixed(5));
        if(!ran[0]){ // ignore first dataset
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(stackAccess(i*10000).toFixed(5));
            ran[0] = true;
        }*/
        times = [0.0, 76.148804, 147.4597, 200.420099, 256.6557, 340.879502, 397.942004, 469.470499, 509.542798, 639.044899, 720.37979];
        document.getElementById("stackexp").innerHTML = "Accessing the top element of a stack is instantaneous and unaffected by the stack's size. However, in order to access any other element within the stack, popping needs to be done until the target becomes the top of the stack. Once its value is known, the elements that were previously popped out need to be pushed back in. This process will take longer if the target element is near the bottom of the stack or if the stack simply contains a lot of elements.";
        break;

        case 2:
        lab = "Search"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackSearch(i*10000).toFixed(5));
        if(!ran[1]){ // ignore first dataset
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(stackSearch(i*10000).toFixed(5));
            ran[1] = true;
        }*/
        times = [0.0, 64.2377, 129.7801, 174.7997, 228.5998, 298.0184, 347.2884, 401.5152, 443.9314, 558.5604, 642.9468];
        document.getElementById("stackexp").innerHTML = "Since the elements of a stack are not sorted according to their values, the only way to find a specific element is to keep popping from the stack until either the target is found or if the stack becomes empty. Once one of these 2 outcomes occurs, the popped elements need to be pushed back in. This function's runtime will increase as the stack's size does as more elements will need to be checked on average.";
        break;

        case 3:
        lab = "Bottom Insertion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackFInsert(i*10000).toFixed(5));
        if(!ran[2]){ // ignore first dataset
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(stackFInsert(i*10000).toFixed(5));
            ran[2] = true;
        }*/
        times = [0.0, 131.324004, 220.820094, 342.751164, 440.89612, 583.287008, 675.40919, 786.235317, 885.632022, 1027.9483405, 1260.970596];
        document.getElementById("stackexp").innerHTML = "Stacks do not allow for direct insertion at the bottom. In order to do so, every element in the stack needs to be popped out. After that, the element that needs to be inserted can be pushed in. Finally, every element that had been popped out needs to be pushed back in. Like access and search, bottom insertion's runtime scales with the stack's size.";
        break;

        case 4:
        lab = "Top Insertion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackEInsert(i*10000).toFixed(5));*/
        times = [0.0, 0.0403, 0.042899, 0.044899, 0.072699, 0.058903, 0.053802, 0.057897, 0.059399, 0.087799, 0.074795];
        document.getElementById("stackexp").innerHTML = "Inserting an element to the top of stack is quick and simple as no popping needs to be done. All that needs to be done is push the element you want inserted. This function will always take the same amount of time regardless of the stack's size.";
        break;

        case 5:
        lab = "Bottom Deletion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackFDelete(i*10000).toFixed(5));
        if(!ran[3]){ // ignore first dataset
            times = [];
            for(var i = 0; i <= pointsnum; i++)
                times.push(stackFDelete(i*10000).toFixed(5));
            ran[3] = true;
        }*/
        times = [0.0, 120.688224, 213.453606, 330.706393, 432.259709, 579.411373, 656.332599, 751.838817, 851.917926, 1036.305558, 1226.4239475];
        document.getElementById("stackexp").innerHTML = "Similar to bottom insertion, in order to delete an element at the bottom of a stack, popping needs to be done until the stack is empty. After that, every element except the one that was last popped needs to be pushed back in. Like bottom insertion, bottom deletion's runtime will increase as the stack's size increases";
        break;

        case 6:
        lab = "Top Deletion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(stackEDelete(i*10000).toFixed(5));*/
        times = [0.0, 0.071606, 0.126199, 0.145604, 0.144204, 0.100901, 0.047499, 0.037402, 0.038198, 0.0511, 0.042201];
        document.getElementById("stackexp").innerHTML = "Stacks excel at operations performed at the top. Top deletion is just another name for popping. Unlike bottom deletion, only 1 pop needs to be performed no matter how many elements are within the stack. Thus, top deletion will take constant time.";
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
                text: 'Stack Time Efficiencies',
                fontSize: 16
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1400
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

/*function stackAccess(length){ // create stack with length elements and measure time needed to access middle element. Includes time needed to pop out elements and push them back in
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);
    

    var target = Math.floor(length/2);
    var t1 = performance.now();    

    var store = new Stack(); // keep popping into another stack until stack size is halved 
    for(var j = 0; j < target; j++)
        store.push(s.pop());
    
    var temp = s.peek(); // access the middle element thats now at the top

    while(store.size() != 0) // push all the element's previously popped out
        s.push(store.pop());    

    return(performance.now() - t1);
}

function stackSearch(length){ // create stack with length elements and measure time needed to find middle element. Includes time needed to pop out elements and push them back in
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);

    var target = Math.floor(length/2);
    var t1 = performance.now();   
    var t2;
    var store = new Stack();

    for(var j = 0; j < s.size(); j++){
        if(s.peek() == target)
            break;
        else
            store.push(s.pop());
    }

    while(store.size() != 0) // push all the element's previously popped out
        s.push(store.pop());
    
    return(performance.now() - t1);
}

function stackFInsert(length){ // create stack with length elements and measure time needed to insert at bottom. Includes time needed to pop out elements and push them back in
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);

    var t1 = performance.now();  

    var store = new Stack(); 
    while(s.size() != 0) // empty stack and store its elements in another stacks
        store.push(s.pop());

    s.push(0); // push the element we want to insert in

    while(store.size() != 0) // push all the element's previously popped out
        s.push(store.pop());
    
    return(performance.now() - t1);
}

function stackEInsert(length){ // create stack with length elements and measure time needed to push an element
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);

    var t1 = performance.now();  
    s.push(0);
    return(performance.now() - t1);
}

function stackFDelete(length){ // create stack with length elements and measure time needed to delete the bottom element
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);

    var t1 = performance.now();  
    if(s.size() == 0) // if stack is empty, nothing can be done
        return (performance.now() - t1);
    else{
        var store = new Stack(); 
        while(s.size() > 1) // remove all elements except the bottom-most one while storing them in another stack
            store.push(s.pop());

        s.pop(); // remove the bottom-most element

        while(store.size() != 0) // push all the element's previously popped out
            s.push(store.pop());

        return (performance.now() - t1);
    }
}

function stackEDelete(length){ // create stack with length elements and measure time needed to perform a pop
    var s = new Stack();
    for(var i = 1; i <= length; i++)
        s.push(i);
    var t1 = performance.now();  
    if(s.size() == 0) // if stack is empty, nothing can be done
        return(performance.now() - t1);
    else{
        s.pop();
        return(performance.now() - t1);
    }
}*/