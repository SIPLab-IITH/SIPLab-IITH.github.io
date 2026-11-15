window.ACA_EXAMPLES = {
 "hop_s": 0.00625,
 "range_db": 70,
 "order": [
  "noisy",
  "single",
  "multi",
  "global",
  "full",
  "clean"
 ],
 "names": {
  "noisy": "Noisy",
  "single": "Local context (single-scale)",
  "multi": "Local contexts (multi-scale)",
  "global": "Global context",
  "full": "Local + global contexts",
  "clean": "Clean"
 },
 "examples": [
  {
   "stem": "p232_246",
   "noise": "living",
   "snr": 2.5,
   "duration_s": 2.54,
   "frames": 407,
   "bins": 201,
   "pesq": {
    "single": 1.77,
    "multi": 2.05,
    "global": 2.29,
    "full": 2.54
   },
   "observation": "The input is corrupted by living-room noise at an SNR of 2.5 dB. This noise contains a stationary hum whose harmonics lie below about 1.5 kHz. Both variants with only the local contexts leave these lines almost untouched in the leading pause (before 0.5 s) and throughout the utterance, whereas the global context removes them. Combining the local and global contexts suppresses the hum further and gives the highest PESQ."
  },
  {
   "stem": "p232_328",
   "noise": "living",
   "snr": 2.5,
   "duration_s": 2.655,
   "frames": 425,
   "bins": 201,
   "pesq": {
    "single": 1.81,
    "multi": 2.36,
    "global": 1.74,
    "full": 2.78
   },
   "observation": "The input is corrupted by living-room noise at an SNR of 2.5 dB, which contains a stationary low-frequency hum. Both variants with only the local contexts retain this hum, most visibly in the trailing pause after about 2.4 s. The global context alone removes the hum, but it also suppresses the end of the last word and gives the lowest PESQ. With both the local and global contexts, the hum is removed and the end of the word is preserved, giving the highest PESQ."
  },
  {
   "stem": "p232_267",
   "noise": "living",
   "snr": 2.5,
   "duration_s": 3.336,
   "frames": 534,
   "bins": 201,
   "pesq": {
    "single": 1.51,
    "multi": 1.82,
    "global": 1.73,
    "full": 2.29
   },
   "observation": "The input is corrupted by living-room noise at an SNR of 2.5 dB, which contains a stationary hum below about 0.5 kHz. The single-scale local context leaves the most residual noise, both in the leading pause and between the words. The multi-scale local contexts reduce this residue, but both local-context variants retain the hum. The global context removes the hum, and combining the local and global contexts gives the highest PESQ."
  },
  {
   "stem": "p232_052",
   "noise": "cafe",
   "snr": 2.5,
   "duration_s": 2.199,
   "frames": 352,
   "bins": 201,
   "pesq": {
    "single": 1.46,
    "multi": 1.89,
    "global": 1.65,
    "full": 2.17
   },
   "observation": "The input is corrupted by cafe noise, a non-stationary babble, at an SNR of 2.5 dB. The single-scale local context leaves a broadband residue throughout the utterance, most visibly above 2 kHz in the leading pause, whereas the multi-scale local contexts and the global context remove most of it. Combining the local and global contexts gives the lowest residual noise in the pauses and the highest PESQ."
  },
  {
   "stem": "p232_010",
   "noise": "cafe",
   "snr": 2.5,
   "duration_s": 2.764,
   "frames": 443,
   "bins": 201,
   "pesq": {
    "single": 1.41,
    "multi": 1.7,
    "global": 1.69,
    "full": 1.93
   },
   "observation": "The input is corrupted by cafe noise at an SNR of 2.5 dB, which includes short transients in the leading pause, between about 0.1 and 0.5 s. These transients pass through both the single-scale local context and the global context, whereas the multi-scale local contexts suppress them. The single-scale local context also leaves high-frequency noise above 2 kHz in the pauses, which the global context removes. With both the local and global contexts, the transients and the high-frequency noise are both suppressed."
  }
 ]
};
