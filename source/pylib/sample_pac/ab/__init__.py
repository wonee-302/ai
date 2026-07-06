# 3 sample_pac/ab/__init__.py 
# sample_pac.ab 패키지를 import 할때 자동 로드되는 파일 
#ab 패키지 셋팅
#ab 밑에 a.py (공통적으로 많이 쓰는 함수들) 와 b.py 
# from sample_pac.ab import * 이렇게 슬수 있도록 셋팅 
__all__ = ['a']

print("sample_pac 안의 ab 패키지 로드됨")