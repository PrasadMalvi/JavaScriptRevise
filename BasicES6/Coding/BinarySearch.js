var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let arr = [0, 25, 26, 29, 30, 32, 37, 46, 58, 62, 63, 64, 73, 73, 75, 77];
let target = 26;
let result = search(arr, target);
if (result == -1) {
  console.log("ELement is not Present");
} else {
  console.log("Element is present at:" + result);
}
