function simpleAdd(input1, input2){
    // tidy is used to free up GPU memory once the fuction returns 
    return tf.tidy(() => {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    });
}

// Create 2 new 1 dimensional tensors 
const data6 = tf.tensor1d([4, 6, 8, 2]);
const data7 = tf.tensor1d([7, 9, 18, 22]);

const result = simpleAdd(data6, data7);

result.print();