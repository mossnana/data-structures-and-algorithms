from typing import List

def solution(nums: List[int]):
    length = len(nums)
    lis = [1] * length
    maximum = 0

    #  ลำดับการไหลใน loop นี้คือ
    # loop นอกไหลไปตาม index 0 ถึง n
    # loop ในไหลจาก index 0 ถึง ตำแหน่งของตัว loop นอก
    for sequence in range(1, length):
        for sub_sequence in range(0, sequence):
            if nums[sequence] > nums[sub_sequence] and lis[sequence] < lis[sub_sequence] + 1:
                lis[sequence] = lis[sub_sequence]+1

    for sequence in range(length):
        maximum = max(maximum, lis[sequence])

    return maximum

problem = [50,3,10,7,40,80]
result = solution(problem)
print(result)
