# Datagen
For development purposes we created a synthetic dataset.
This was done in python using the faker package which allows the creation of random names, usernames, emails, business etc.

With the general idea of what data we *should* have we implemented our database design.

# Database design

```mermaid
erDiagram
    Password }|--o{ Breach : Password_Breaches
    Password {
        string value
    }
    Username }|--o{ Breach : Username_Breaches
    Username {
        string value
    }
    Email }|--o{ Breach: Email_Breaches
    Email {
        string local
        string domain
    }
    Breach{
        datetime date
        string name
        boolean verified
        int id
        string source
        datetime insertedDate
    }
```
