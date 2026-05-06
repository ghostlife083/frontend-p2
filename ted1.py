maior = 1
menor = 5
soma_m = 0
cont_m = 0

cont_f = 0

for i in range(15):
    altura = float(input("Digite a altura: "))
    genero = input("Digite o genero (M/F): ")

    if altura > maior:
        maior = altura

    if altura < menor:
        menor = altura

    if genero == "M" or genero == "m":
        soma_m = soma_m + altura
        cont_m = cont_m + 1
    else:
        cont_f = cont_f + 1

if cont_m > 0:
    media_m = soma_m / cont_m
else:
    media_m = 0

print("Maior altura:", maior)
print("Menor altura:", menor)
print("Media masculino:", media_m)
print("Quantidade feminino:", cont_f)
