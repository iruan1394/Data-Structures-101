/*class HashTable{
    constructor(){
        this.values = {};
        this.size = 0;
    }

    calculateHash(key){
        return parseInt(key.substring(3, key.length));
    }

    add(key, value){
        var hash = this.calculateHash(key);
        this.values[hash] = value;
        this.size++;
    }

    remove(key){
        var hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash)){
            delete this.values[hash];
            this.size--;
        }
    }

    get(key){
        var hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash))
            return this.values[hash];
        else    
            return undefined;
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
            text: 'Hash Table Time Efficiencies',
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

function hashGraph(num){
    var times = [];
    var lab = "";
    switch(num) {
        case 1:
        lab = "Access"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(hashAccess(i*10000).toFixed(5));*/
        document.getElementById("hashexp").innerHTML = "Once the hash value has been calculated from a key, accessing the value stored in the corresponding bucket is quick and simple. This function's runtime will not be affected by the amount of entries in the table as we can directly access any bucket provided its hash value.";
        break;

        case 2:
        lab = "Search"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(hashSearch(i*10000).toFixed(5));*/
        times = [0.0, 0.0433, 0.0427, 0.049, 0.0341, 0.0361, 0.0364, 0.0366, 0.0363, 0.0363, 0.0357];
        document.getElementById("hashexp").innerHTML = "Searching for a value within a hash table only requires the computing of its hash value from its key. This search time depends on how complex its hash function is. A complex hash function will naturally take more time to compute the hash value for a key while a simple hash function will take less. Either way, search time is not affected by the hash table's size unless collisions occur.";
        break;

        case 3:
        lab = "Insertion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(hashInsert(i*10000).toFixed(5));*/
        times = [0.0, 0.0536, 0.0473, 0.0625, 0.0706, 0.0566, 0.0729, 0.0648, 0.0649, 0.0703, 0.0644];
        document.getElementById("hashexp").innerHTML = "In order to insert a key value pair into a hash table, a hash value must be computed from the key. Once the hash has been determined, all that needs to be done is insert the value into the corresponding bucket. Both of these processes are not affected by the table's size unless a collision occurs.";
        break;

        case 4:
        lab = "Deletion"
        /*for(var i = 0; i <= pointsnum; i++)
            times.push(hashDelete(i*10000).toFixed(5));*/
        times = [0.0, 0.0426, 0.0435, 0.0445, 0.0377, 0.0391, 0.0378, 0.0401, 0.0387, 0.0362, 0.0389];
        document.getElementById("hashexp").innerHTML = "In order to delete a key value pair from a hash table, the key's hash value must first be computed. Then, the bucket corresponding to that hash value must be checked to see if there is a value associated with the target key. If there is, then simply remove that value from the bucket. If the hash table also stores its keys, then remove the key as well. The number of entries in the hash table will not affect the speed at which this function is performed. The runtime of hash table deletion will always be constant unless a collision occurs.";    
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
                text: 'Hash Table Time Efficiencies',
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

/*function hashAccess(length){
    var table = new HashTable();
    for(var i = 1; i <= length; i++){
        var k = "var" + i.toString();
        table.add(k,i);
    }

    var h = table.calculateHash("var" + Math.ceil(length/2).toString());
    var t1 = performance.now();

    var output = table.values[h];
    return (performance.now() - t1);
}

function hashSearch(length){
    var table = new HashTable();
    for(var i = 1; i <= length; i++){
        var k = "var" + i.toString();
        table.add(k,i);
    }

    var t1 = performance.now();
    var h = table.calculateHash("var" + Math.ceil(length/2).toString());

    return (performance.now() - t1);
}

function hashInsert(length){
    var table = new HashTable();
    for(var i = 1; i <= length; i++){
        var k = "var" + i.toString();
        table.add(k,i);
    }

    var t1 = performance.now();
    table.add("var0",0);
    
    return (performance.now() - t1);
}

function hashDelete(length){
    var table = new HashTable();
    for(var i = 1; i <= length; i++){
        var k = "var" + i.toString();
        table.add(k,i);
    }

    var t1 = performance.now();
    table.remove("var1");
    
    return (performance.now() - t1);
}*/