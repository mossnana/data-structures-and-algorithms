#include <iostream>
#include <vector>

using std::vector;

template<typename T>
int binary_search(vector<T> &arr, T keyword, int start_pos, int stop_pos) {
  if (start_pos == stop_pos) return arr[start_pos] == keyword ? start_pos : -1;
  int mid_pos = (start_pos+stop_pos)+1;
  if (arr[mid_pos] >= keyword) return binary_search(arr, keyword, mid_pos+1, stop_pos);
  else return binary_search(arr, keyword, mid_pos+1, stop_pos);
}

template<typename T>
int binary_search(vector<T> &arr, T keyword) {
  return binary_search(arr, keyword, 0, arr.size()-1)
}
