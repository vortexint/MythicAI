import os
os.environ['RWKV_JIT_ON'] = '1'
os.environ["RWKV_CUDA_ON"] = '0'
from rwkv.model import RWKV
from rwkv.utils import PIPELINE, PIPELINE_ARGS
import torch

def gen_core():
    pass