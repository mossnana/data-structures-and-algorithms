#include <iostream>
#include <map>
#include <queue>

using namespace std;

void read_tree(int final_value, map<int, int> &previous) {
  string out = "1 ";
  while (previous[final_value] != -1) {
    if (previous[final_value] * 3 == final_value) {
      out = out + "x 3 ";
    } else {
      out = out + "÷ 2 ";
    }
    final_value = previous[final_value];
  }
  cout << out << endl;
}

void m3d2(int target) {
  // create queue for save nodes
  map<int, int> previous;
  queue<int> quota;
  int current_value = 1;

  // initial solution
  quota.push(1);
  previous[1] = -1;

  while(!quota.empty()) {
    current_value = quota.front();
    quota.pop();

    if (current_value == target) break;

    int left_value = current_value/2;
    int right_value = current_value*3;

    /* 
      Check that have been calculated
      if haven't been calculated in previous map should be 0 (init value of not found key)

      order of queue:
        1. left
        2. right
    */
    if (previous[left_value] == 0) {
      quota.push(left_value);
      previous[left_value] = current_value;
    }

    if (previous[right_value] == 0) {
      quota.push(right_value);
      previous[right_value] = current_value;
    }
  }

  if (current_value == target) {
    read_tree(current_value, previous);
  }
}

int main() {
  m3d2(30);

  return 0;
}
