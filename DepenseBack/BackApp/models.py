from django.db import models

# Create your models here.


class User(models.Model):
    IdUser = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=20)
    Passwd = models.CharField(max_length=12)
    UserMail = models.CharField(max_length=50)

    def __str__(self):
        return self.IdUser
    

class Categorie(models.Model):
    IdCat = models.AutoField(primary_key=True)
    CatName = models.CharField(max_length=20)

    def __str__(self):
        return self.IdCat
    

class Depense(models.Model):
    IdDepense = models.AutoField(primary_key=True)
    Montant = models.FloatField(max_length=15)
    DateDep = models.DateField(max_length=9)
    Description = models.CharField(max_length=20)


    IdUser = models.ForeignKey(User,on_delete=models.CASCADE)
    IdCat = models.ForeignKey(Categorie,on_delete=models.CASCADE)
    # IdUser = models.IntegerField(max_length=20)
    # IdCat = models.IntegerField(max_length=20)

    def __str__(self):
        return self.IdDepense