window.ACA_META = {
 "utterance": "p232_006",
 "hop_s": 0.00625,
 "bin_khz": 0.08,
 "chunk": 32,
 "log2_range": [
  -3,
  3
 ],
 "paper_panels": {
  "time/b2/h4": "d",
  "time/b2/h1": "e",
  "time/b4/h4": "f",
  "freq/b3/h4": "g",
  "freq/b4/h3": "h",
  "freq/b1/h1": "i"
 },
 "models": {
  "cmgan": {
   "name": "CMGAN",
   "time": {
    "rows": 101,
    "row_step": 4,
    "row_offset": 1,
    "frames": 818,
    "shown_frames": 816,
    "pool": 4
   },
   "freq": {
    "frames": 818,
    "frame_step": 4,
    "frame_offset": 3,
    "bins": 101
   },
   "heads": 4,
   "spec": {
    "frames": 817,
    "bins": 201,
    "range_db": 70
   }
  },
  "mpsenet": {
   "name": "MP-SENet",
   "time": {
    "rows": 101,
    "row_step": 4,
    "row_offset": 1,
    "frames": 817,
    "shown_frames": 816,
    "pool": 4
   },
   "freq": {
    "frames": 817,
    "frame_step": 4,
    "frame_offset": 3,
    "bins": 101
   },
   "heads": 4,
   "spec": {
    "frames": 817,
    "bins": 201,
    "range_db": 70
   }
  }
 },
 "aca_models": {
  "acanet_m": {
   "name": "ACA-Net-M",
   "blocks": 6,
   "contexts": {
    "time": [
     "d=1",
     "d=2",
     "d=4",
     "d=8",
     "d=16",
     "global"
    ],
    "freq": [
     "d=1",
     "d=2",
     "d=4",
     "d=8",
     "d=16",
     "global"
    ]
   },
   "frames": 817,
   "rows": 50,
   "row_khz": 0.16,
   "spec": {
    "frames": 817,
    "bins": 201,
    "range_db": 70
   }
  }
 }
};
