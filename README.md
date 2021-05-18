# Playing with Blobs

## Results running in the same workflow

| Round | Artifact        | Cache  | Fastest Overall    |
| ----- | --------------- | -----  | ------------------ |
| 1.    | train           | upload | artifact           |
| 2.    | train & upload  |        | artifact           |
| 3.    | train           | upload | artifact           |

## Results running as separate workflows

| Round | Artifact        | Cache  | Fastest Overall    |
| ----- | --------------- | -----  | ------------------ |
| 1.    | upload          | train  | cache              |
