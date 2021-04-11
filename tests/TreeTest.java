package com.company;

import java.io.FileWriter;
import java.util.Scanner;

public class TreeTest {
    static int tries = 1000;
    public static void main(String[] args) {
        try {
            double[] times = new double[11];
            double trash;
            FileWriter w;
            Scanner s = new Scanner(System.in);
            System.out.println("Which test?");

            int num = Integer.parseInt(s.nextLine());

            switch (num) {
                case 1:

                    break;

                case 2:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = treeSearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = treeSearch(i * 10000);
                        while(i > 0 && times[i] > times[i-1])
                            i-=2;
                    }
                    w = new FileWriter("treeSearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = treeInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = treeInsert(i * 10000);
                    }
                    w = new FileWriter("treeInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = treeDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = treeDelete(i * 10000);
                    }
                    w = new FileWriter("treeDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;
                default:
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static double treeSearch(int size){
        if(size == 0)
            return 0;

        int[] arr = new int[size];

        for(int i = 0; i < size; i++)
            arr[i] = i+1;

        BinarySearchTree t = new BinarySearchTree();
        t.root = t.balancedTree(arr,0,size-1);
        Node temp;
        double sum = 0;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = t.find(size);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double treeInsert(int size){
        if(size == 0)
            return 0;

        int[] arr = new int[size];

        for(int i = 0; i < size; i++)
            arr[i] = i+1;

        double sum = 0;

        BinarySearchTree t = new BinarySearchTree();
        t.root = t.balancedTree(arr,0,size-1);
        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            t.insert(size+1);
            sum += System.nanoTime() - start;
            t.remove(size+1);
        }

        return sum/(tries * 1000);
    }

    public static double treeDelete(int size){
        if(size == 0)
            return 0;

        int[] arr = new int[size];

        for(int i = 0; i < size; i++)
            arr[i] = i+1;

        double sum = 0;

        BinarySearchTree t = new BinarySearchTree();
        t.root = t.balancedTree(arr,0,size-1);
        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            t.remove(size);
            sum += System.nanoTime() - start;
            t.insert(size);
        }

        return sum/(tries * 1000);
    }
}

class Node{
    int value;
    Node left;
    Node right;

    Node(int v){
        value = v;
        left = null;
        right = null;
    }
}

class BinarySearchTree{
    Node root;

    BinarySearchTree(){
        root = null;
    }

    Node balancedTree(int[] arr, int start, int end){
        if(start > end)
            return null;

        int middle = (start+end)/2;

        Node n = new Node(arr[middle]);

        n.left = balancedTree(arr, start, middle-1);
        n.right = balancedTree(arr, middle+1, end);

        return n;
    }

    Node find(int v){
        if(this.root == null)
            return null;

        Node curr = this.root;

        while(curr != null){
            if(v < curr.value)
                curr = curr.left;
            else if (v > curr.value)
                curr = curr.right;
            else
                return curr;
        }
        return null;
    }

    void insert(int v){
        Node n = new Node(v);

        if(this.root == null)
            this.root = n;
        else{
            Node curr = this.root;
            while(curr != null){
                if(n.value < curr.value){
                    if(curr.left == null) {
                        curr.left = n;
                        return;
                    }
                    else
                        curr = curr.left;
                }
                else if (n.value > curr.value){
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

    void remove(int v){
        this.root = this.removeNode(this.root, v);
    }

    Node removeNode(Node n, int v){
        if (n == null)
            return null;
        else if (v < n.value){
            n.left = this.removeNode(n.left, v);
            return n;
        }
        else if (v > n.value){
            n.right = this.removeNode(n.right, v);
            return n;
        }
        else if (v == n.value){
            if(n.left == null && n.right == null){
                n = null;
                return n;
            }

            if(n.left == null){
                n = n.right;
                return n;
            }
            else if(n.right == null){
                n = n.left;
                return n;
            }
            else{
                Node min = this.findMin(n.right);
                n.value = min.value;

                n.right = this.removeNode(n.right, min.value);
                return n;
            }
        }
        return null;
    }

    Node findMin(Node n){
        if(n.left == null)
            return n;
        else
            return this.findMin(n.left);
    }

    void preorder(Node n){
        if(n != null){
            System.out.println(n.value);
            this.preorder(n.left);
            this.preorder(n.right);
        }
    }
}
