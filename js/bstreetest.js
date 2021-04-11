/*class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var n = new Node(value);

        if(this.root == null)
            this.root = n;
        else{
            var curr = this.root;
            while(curr){
                if(n.data < curr.data){
                    if(curr.left == null){
                        curr.left = n;
                        return;
                    }
                    else
                        curr = curr.left;
                }
                else if(n.data > curr.data){
                    if(curr.right == null){
                        curr.right = n;
                        return;
                    }
                    else    
                        curr = curr.right;
                }
            }
        } 
    }

    find(value){
        if(this.root == null)
            return false;

        var curr = this.root;
        while(curr){
            if(value < curr.data)
                curr = curr.left;
            else if (value > curr.data)
                curr = curr.right;
            else
                return true;
        }
        return false;
    }

    remove(value){
        this.root = this.removeNode(this.root, value);
    }
    
    removeNode(node, value){
        if (node == null)
            return;
        else if (value < node.data){
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (value > node.data){
            node.right = this.removeNode(node.right, value);
            return node;
        }
        else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            else{
                var min = this.findMin(node.right);
                node.data = min.data;

                node.right = this.removeNode(node.right, min.data);
                return node;
            }
        }
    }

    findMin(node){
        if(node.left == null)
            return node;
        else
            return this.findMin(node.left);
    }

    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
}*/

function initialize(){
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
            text: 'Binary Search Tree Time Efficiencies',
            fontSize: 16
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 1000
                },
                scaleLabel: {
                display: true,
                labelString: 'Runtime (nanoseconds)'
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

function shuffle(array) { // function to shuffle an array's elements. Taken from stackoverflow
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function bstGraph(num){
    var times = [];
    var lab = "";
    switch(num) {
        case 1:
        lab = "Access"
        document.getElementById("bstexp").innerHTML = "";
        break;

        case 2:
        lab = "Search"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(bstSearch(i*100000).toFixed(5));*/
        times = [0.0,
            435.9,
            484.5,
            487.1,
            513.0,
            514.0,
            517.7,
            546.6,
            547.8,
            548.4,
            551.8];
        document.getElementById("bstexp").innerHTML = "Because binary search trees store nodes in order based on their values, searching can be done more efficiently by navigating through the tree and comparing node values to the target's. While the runtime of BST searching does scale with the tree's size, it is still far more efficient than blind searches in other data structures as long as the tree is balanced. The former has a logarithmic time complexity while the latter has a linear one. ";
        break;

        case 3:
        lab = "Insertion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(bstSearch(i*100000).toFixed(5));*/
        times = [0.0,
            460.6,
            493.7,
            503.4,
            509.4,
            510.3,
            512.0,
            535.9,
            541.8,
            542.2,
            544.7];
            document.getElementById("bstexp").innerHTML = "When a node is inserted into a tree, its position is determined by its value compared to the nodes already within the tree. In order to calculate this position, it is necessary to traverse the tree in the same manner as searching. As such, the runtime of BST insertion will also scale with the tree's size and take logarithmic time. However, if the tree is very unbalanced, insertion time complexity may be closer to linear time.";
        break;

        case 4:
        lab = "Deletion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(bstDelete(i*100000).toFixed(5));*/
        document.getElementById("bstexp").innerHTML = "Deleting a node from a binary search tree is quite a complicated process. First the target node must be found within the tree and navigated to, as it is impossible to directly access it. Then, different actions need to be taken depending on how many children the target has. If the target is a leaf, it can just be deleted. If the target has 1 child, it needs to be replaced by that child. If the target has 2 children, then it needs to be replaced by the smallest node in its right subtree. These processes all have runtimes that scale with tree size and have logarithmic time complexity.";
        times = [0.0,
            476.2,
            506.5,
            508.8,
            522.1,
            522.5,
            525.0,
            551.2,
            551.2,
            551.6,
            554.5];
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
                text: 'Binary Search Tree Time Efficiencies',
                fontSize: 16
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    },
                    scaleLabel: {
                    display: true,
                    labelString: 'Runtime (nanoseconds)'
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

/*function bstSearch(length){
    var arr = [];
    var t = new BinarySearchTree();
    for(var i = 1; i <= length; i++)
        arr.push(i);
    shuffle(arr);

    for(var j = 0; j < arr.length; j++)
        t.insert(arr[j]);

    var t1 = performance.now();
    var found = t.find(Math.floor(length/2));

    return (performance.now() - t1);
}

function bstInsert(length){
    var arr = [];
    var t = new BinarySearchTree();
    for(var i = 1; i <= length; i++)
        arr.push(i);
    shuffle(arr);

    for(var j = 0; j < arr.length; j++)
        t.insert(arr[j]);
    
    var t1 = performance.now();
    t.insert(Math.floor(length/2) + .5);

    return ((performance.now() - t1));
}

function bstDelete(length){
    var arr = [];
    var t = new BinarySearchTree();
    for(var i = 1; i <= length; i++)
        arr.push(i);
    shuffle(arr);

    for(var j = 0; j < arr.length; j++)
        t.insert(arr[j]);
    
    var t1 = performance.now();
    t.remove(Math.floor(length/2));

    return ((performance.now() - t1));
}*/