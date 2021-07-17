#include <iostream>
#include <vector>

using namespace std;

template<typename T>
void selection_sort(vector<T> &A) {
  size_t pos = A.size() - 1;
  
  for (; pos > 0; pos--) {
    size_t max_index = pos;
    for (size_t current_index = 0; current_index < pos; current_index++) {
      if (A[current_index] > A[max_index]) {
        max_index = current_index;
      }
    }
    swap(A[pos], A[max_index]);
  }
}

template<typename T>
void reverse_selection_sort(vector<T> &A) {
  size_t pos = A.size() - 1;
  
  for (; pos > 0; pos--) {
    size_t max_index = pos;
    for (size_t current_index = 0; current_index < pos; current_index++) {
      if (A[current_index] < A[max_index]) {
        max_index = current_index;
      }
    }
    swap(A[pos], A[max_index]);
  }
}

int main() {
  // asc
  cout << "--------- asc ---------" << endl;
  vector<int> numbers = {5,4,3,2,1};
  selection_sort(numbers);
  for (size_t index = 0; index < numbers.size(); index++) {
    cout << numbers[index] << endl;
  }

  cout << endl;

  // desc
  cout << "--------- desc ---------" << endl;
  vector<int> reverse_numbers = {1,2,3,4,5};
  reverse_selection_sort(reverse_numbers);
  for (size_t index = 0; index < reverse_numbers.size(); index++) {
    cout << reverse_numbers[index] << endl;
  }
}
