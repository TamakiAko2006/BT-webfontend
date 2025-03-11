function findMin(arr) {
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("mảng không chứa phần tử");
            return "mảng không chứa phần tử"
        }
        let minItem= arr[0];
        for (let i = 0;  i< arr.length; i++) {
            if(arr[i]<minItem){
                minItem= arr[i];
            }

        }
        console.log("giá trị nhỏ nhất",minItem);

        return minItem;
    }
    console.log("giá trị không hợp lệ");

}
findMin([4,1,8,9]);
