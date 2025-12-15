class MaxHeap{

    constructor(){
        this.data = []
    }

    size(){
        return this.data.length
    }

    peek() {
        return this.data[0]
    }

    insert(num){

        if (this.data.length == 0){
            this.data.push(num)
            return
        }

        // put in next available slot
        this.data.push(num)

        let i = this.data.length - 1
        
        while (i > 0){
            // interesting fact here. here p is the index of parent for a LEFT or RIGHT child!!!
            // initially I thought why not just floor (i/2). but this works only for left child - try with BST with 1-9 and check the index of 9 and calculate
            // you will understand the magic
            let p = Math.floor((i - 1)/2)

            if(this.data[i] <= this.data[p]){
                // if the inserted item is less than the parent, heap is fine
                break;
            }
            
            // if not, swap
            [this.data[i], this.data[p]] = [this.data[p], this.data[i]]
            
            // move the i pointer to parent and repeat the process
            i = p

        }
    }

    delete(){

        if (this.data.length == 0){
            // no data case
            return -1
        }

        if (this.data.length == 1){
            // only one element
            return this.data.pop()
        }

        let ret = this.data[0]

        // replace root with last element
        let last = this.data.pop()
        this.data[0] = last

        // sift down
        let c = 0
        while(c < this.data.length){
            let l = c * 2 + 1
            let r = c * 2 + 2
    
            // Check if heap property is satisfied - 3 cases:
            
            // Case 1: No children exist
            if (l >= this.data.length) {
                // No children exist - heap is ok
                break
            }
            
            // Case 2: Both left and right children exist
            if (r < this.data.length) {
                if (this.data[c] >= this.data[l] && this.data[c] >= this.data[r]) {
                    // Current node is >= both children - heap is ok
                    break
                }
            }
            // Case 3: Only left child exists
            else {
                if (this.data[c] >= this.data[l]) {
                    // Current node is >= left child - heap is ok
                    break
                }
            }

            if (r >= this.data.length){
                // only left child exists
                [this.data[c], this.data[l]] = [this.data[l], this.data[c]]
                c = l
            } else if (this.data[l] > this.data[r]){
                // both exist, left is larger
                [this.data[c], this.data[l]] = [this.data[l], this.data[c]]
                c = l
            } else {
                // both exist, right is larger
                [this.data[c], this.data[r]] = [this.data[r], this.data[c]]
                c = r
            }
            
        }
        return ret

    }

}

export default MaxHeap;