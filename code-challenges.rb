# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


# created a method named odd_or_even
def odd_or_even(num)
# compose an of statement to determine whether the argument is odd is or even.
    if num % 2 == 0
        # if the number is even, the implicit return is the following
        "#{num} is even"
    else
        # if the number is odd, the implicit return is the following
        "#{num} is odd"
    # end for the if block
    end
# end for the method
end

p odd_or_even("#{num1}")
p odd_or_even("#{num2}")
p odd_or_even("#{num3}")

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = "Rubber Soul"
# Expected output: 'Rbbr Sl'
album2 = "Sgt Pepper"
# Expected output: 'Sgt Pppr'
album3 = "Abbey Road"
# Expected output: 'bby Rd'

# created my method.
def no_vowels(string)
  # I used gsub to replace each occurence of a vowel with a ''.
  result = string.gsub(/[aeiou]/i, "")
  # Just to verify I used the method correctly, and for practice, I subbed the '' for '1'
  # and received this result
#   result = string.gsub(/[aeiou]/i, "1")
#   "R1bb1r S11l"
#   "Sgt P1pp1r"
#   "1bb1y R11d"
  return result
end

p no_vowels("#{album1}")
p no_vowels("#{album2}")
p no_vowels("#{album3}")

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = "Racecar"
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = "LEARN"
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = "Rotator"
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
    # I used .downcase in my if statement to determine if the string was a palindrome. I learned the function is case sensitive and initially the upper case characters were causing a return stating none of the strings were palindromes.
    if string.downcase == string.reverse.downcase
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
        # end for the if block
    end
    # end for the method
end

p palindrome("#{is_palindrome1}")
p palindrome("#{is_palindrome2}")
p palindrome("#{is_palindrome3}")

# outputs
# "7 is odd"
# "42 is odd"
# "221 is odd"
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"
# "Racecar is a palindrome."
# "LEARN is not a palindrome."
# "Rotator is a palindrome."
