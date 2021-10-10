from math import sqrt


class RoundPeg:
    def __init__(self, radius):
        self.__radius = radius

    def get_radius(self) -> float:
        return self.__radius


class RoundHole:
    def __init__(self, radius: float):
        self.__radius = radius

    def get_radius(self) -> float:
        return self.__radius

    def fits(self, peg: RoundPeg) -> bool:
        return self.get_radius() >= peg.get_radius()


class SquarePeg:
    def __init__(self, width: float):
        self.__width = width

    def get_width(self) -> float:
        return self.__width


class SquarePegAdapter(RoundPeg):
    __peg: SquarePeg

    def __init__(self, peg: SquarePeg):
        self.__peg = peg

    def get_radius(self) -> float:
        return self.__peg.get_width() * sqrt(2) / 2


hole = RoundHole(5)
round_peg = RoundPeg(10)
print('Normal case: ', hole.fits(round_peg))

small_squrpeg = SquarePeg(5)
large_squrpeg = SquarePeg(10)
small_squrpeg_adapter = SquarePegAdapter(small_squrpeg)
large_squrpeg_adapter = SquarePegAdapter(large_squrpeg)
print('Small with adapter case: ', hole.fits(small_squrpeg_adapter))
print('Large with adapter case: ', hole.fits(large_squrpeg_adapter))
