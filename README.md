Encode 1.txt to 2.txt with shift 7:

$ [node] rot -s 7 -i "./1.txt" -o "./2.txt" -a encode

Decode 2.txt to 3.txt with shift 7:

$ [node] rot  --shift 7 --input 3.txt --output 4.txt --action decode

Decode stdin to stdout with shift 7:

$ [node] rot --action decode --shift 7
